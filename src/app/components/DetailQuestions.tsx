type DesignerProps = {
    question: string
    answer?: string
    books?: string[]
    apps?: string[]
}

export function DetailQuestions({ question, answer, books, apps }: DesignerProps) {
    return (
        <div className="mb-10">
            <div className="font-bold text-2xl mb-4">{question}</div>
            {
                answer ?
                    (
                        <div>{answer}</div>
                    ) : ""
            }
            <div>{JSON.stringify(apps)}</div>
        </div>
    )
}