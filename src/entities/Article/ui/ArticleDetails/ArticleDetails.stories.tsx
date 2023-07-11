import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';
import {
    Article,
    ArticleBlockType,
    ArticleType,
} from '../../model/types/article';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;
const ArticleData: Article = {
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
const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <ArticleDetails {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articleDetails: {
            data: ArticleData,
        },
    }),
];
export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];
export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'true',
        },
    }),
];
