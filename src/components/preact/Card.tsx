interface CardProps {
    title: string;
}

export function Card({ title }: CardProps) {
    return (
        <article>
            <header>
                <div>
                    <img src="../../../public/mac.jpeg" alt="" />
                </div>
            </header>
            <small>Plateado</small>
            <h1>{title}</h1>
        </article>
    );
}