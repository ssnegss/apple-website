export type PhoneModel = {
   id: number;
   title: string;
   color: Array<string>;
   img: string;
};

export type PhoneModelSize = {
   label: string;
   value: PhoneModelSizeValue;
};

export type PhoneModelSizeValue = "small" | "large";
