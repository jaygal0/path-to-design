type DesignerProps = {
    question: string
    answer?: string
    books?: string[]
}

export function DetailQuestions({ question, answer, books }: DesignerProps) {
    return (
        <div className="mb-10">
            <div className="font-bold text-2xl mb-4">{question}</div>
            {
                answer ?
                    (
                        <div>{answer}</div>
                    ) : ""
            }
            {books.map((book) => {
                return (
                    <div>hello</div>
                )
            })}
        </div>
    )
}