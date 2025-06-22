import path from "path";

export const createPath = (fileName: string) => path.resolve(__dirname, "../views", `${fileName}.html`);