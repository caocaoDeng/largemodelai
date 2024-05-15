'use client';

import { useEffect } from 'react';
import { HfInference } from '@huggingface/inference';

export default function Home() {
    const test = async () => {
        const hf = new HfInference('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');
        await hf.textGeneration({
            model: 'gpt2',
            inputs: 'The answer to the universe is'
        });

        for await (const output of hf.textGenerationStream({
            model: 'google/flan-t5-xxl',
            inputs: 'repeat "one two three four"',
            parameters: { max_new_tokens: 250 }
        })) {
            console.log(output.token.text, output.generated_text);
        }
    };
    useEffect(() => {
        console.log('1111');
        console.log('main');
        test();
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <input />
        </main>
    );
}
