import { PortableTextBlock } from '@portabletext/types'

export interface Post {
  _id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  author?: string;
  imageUrl?: string;
  publishedAt: string;
  body?: PortableTextBlock[];
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
} 