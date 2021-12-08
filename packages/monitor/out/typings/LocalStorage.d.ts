export interface LocalStorage {
    length: number;
    setItem: (key: string, value: any) => void;
    getItem: (key: string) => any | null;
    removeItem: (key: string) => void;
    key: (n: number) => any | null;
    clear: () => void;
}
