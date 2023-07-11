import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import { Article, ArticleBlockType, ArticleType } from '../../types/article';

const data: Article = {
    id: '1',
    title: 'Title ',
    subtitle: 'subtitle',
    img: 'http://russkievesti.ru/assets/images/resources/20622/perito-moreno-samyij-fotogenichnyij-lednik-v-mire-1.jpg',
    views: 100,
    createdAt: '25.08.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'title block',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,',
                'dolorem vel laborum porro blanditiis magnam nobis eaque. Perspiciatis,',
                ' explicabo maiores voluptatibus tenetur vel placeat saepe consectetur',
                'ut natus et animi!',
            ],
        },
        {
            id: '23',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n<body>\n<p id="hello"></p>\n<script>\ndocument.getElementById("hello").innerHTML = "Hello, world!";\n</script>\n</body>\n</html>',
        },
        {
            id: '12',
            type: ArticleBlockType.IMAGE,
            src: 'http://russkievesti.ru/assets/images/resources/20622/perito-moreno-samyij-fotogenichnyij-lednik-v-mire-1.jpg',
            title: 'title img',
        },
        {
            id: '3',
            type: ArticleBlockType.TEXT,
            title: 'title block',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,',
                'dolorem vel laborum porro blanditiis magnam nobis eaque. Perspiciatis,',
                ' explicabo maiores voluptatibus tenetur vel placeat saepe consectetur',
                'ut natus et animi!',
            ],
        },
    ],
};

describe('fetchArticleById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error get article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
