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
        test();
    }, []);
    return (
        <main>
            <input />
        </main>
    );
}
