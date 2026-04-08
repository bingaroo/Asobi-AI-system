import fs from 'fs';
import path from 'path';
import { BioMedPaper, TrainingItem } from './members';

export * from './members';

export async function getAllItems(): Promise<BioMedPaper[]> {
  const files = [
    'asobi_link_curated.json',
    'cs_papers.json', 'bio_papers.json', 'biomed_papers.json',
    'cs_videos.json', 'bio_videos.json', 'biomed_videos.json'
  ];
  let allItems: BioMedPaper[] = [];

  for (const file of files) {
    const dataPath = path.join(process.cwd(), 'src/data', file);
    try {
      if (fs.existsSync(dataPath)) {
        const fileContents = fs.readFileSync(dataPath, 'utf8');
        const data = JSON.parse(fileContents);
        allItems = [...allItems, ...data];
      }
    } catch (error) {}
  }

  return allItems.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
}

export async function getTrainingSeries(): Promise<TrainingItem[]> {
  const dataPath = path.join(process.cwd(), 'src/data/training.json');
  try {
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, 'utf8');
      const data = JSON.parse(fileContents);
      return data.series || [];
    }
    return [];
  } catch (error) {
    return [];
  }
}
