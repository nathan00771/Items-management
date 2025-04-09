export interface Item {
    id: number;
    name: string;
    type: string;
    category: string;
    price: number;
    imageUrl?: string;
    documentUrl?: string;
    isDeleted?: boolean;
  }