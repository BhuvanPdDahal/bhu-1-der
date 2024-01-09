import { ObjectId } from 'mongodb';

export interface FormDataProp {
    title: string;
    description: string;
}

export interface State {
    isLoading: boolean;
    isMiniLoading: boolean;
    fetched: boolean;
    blogs: BlogType[];
    selectedBlog: Blog;
    page: number;
    limit: number;
    totalPages: number;
}

interface BlogInit {
    title: string;
    description: string;
    createdAt: string;
}

interface BlogType extends BlogInit {
    _id: ObjectId;
}

export type Blog = BlogType | null;

export interface ManyData {
    blogs: BlogType[];
    page: number;
    totalPages: number;
}

type Data = BlogType | ManyData;

export interface Action {
    type: string;
    for?: string;
    data?: Data;
}

export interface BlogProp extends BlogInit {
    id: string;
}