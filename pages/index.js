import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz - CDZ</title>        
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz CDZ</h1>
          </Widget.Header>
          <Widget.Content>           
            <form onSubmit={function (event) {
              event.preventDefault();
              
              router.push(`/quiz?name=${name}`);
              console.log("Fazendo submissão por meio do React")
            }}
            >              
              <Input
                name="nomeDoUsuario"
                onChange={(event) => {setName(event.target.value)}}  
                placeholder="Digite seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
        <Widget.Content>
            <h1>Quiz CDZ</h1>

            <p>loren ipson dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/viniciusgabriels" />
    </QuizBackground>
  ) 
}
