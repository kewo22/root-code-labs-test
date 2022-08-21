export interface CardProps {
    image: string;
    title: string;
    description: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onChange?: (event: string) => void;
}