import { MouseEventHandler } from "react";

export interface INavBrand {
    title: string;
    isActive: boolean;
}

export interface INavItem {
    text: string;
    to?: string;
}

export interface IButton {
    text: string;
    onClick?: MouseEventHandler;
}

export interface INavList {
    isActive: boolean;
}

export interface INavButton {
    btnClick?: MouseEventHandler;
}

export interface INavToggle {
    btnClick?: MouseEventHandler;
}

export interface ILabelSection {
    text: string;
}

export interface ICardHomeHero {
    classes?: string;
    icon?: string;
    title?: string;
    description?: string;
}

export interface ITitleSection {
    title: string;
    subtitle: string;
    classes?: string;
    idname?: string;
}

export type TDataAuction = Array<
    {
        author: string;
        authorVerified: boolean;
        title: string;
        bidPrice: number;
        image: string;
        date: string;
        expired: number;
    }
>

export interface ICardAuction {
    author: string;
    authorVerified: boolean;
    title: string;
    bidPrice: number;
    image: string;
    date: string;
    expired: number;
    icon: string;
}

export interface ICardTeam {
    author: string;
    authorVerified: boolean;
    title: string;
    bidPrice: number;
    image: string;
    date: string;
    expired: number;
    link: string;
}
export interface ICardCollection {
    author: string;
    authorVerified: boolean;
    title: string;
    image: string;
}

export interface ICardFeature {
    icon: string;
    title: string;
}

export interface IAccordion {
    title: string;
    content: string;
}

export interface ISlider {
    elements : any;
}

export interface IImage {
    image : string;
}