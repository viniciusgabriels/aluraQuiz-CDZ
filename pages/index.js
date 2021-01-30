import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
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
        <title>Alura Quiz - {db.title}</title>
        
      </Head>
      <QuizContainer>
					
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
					variants={{
            show: { opacity: 1, y: '0' },
             hidden: { opacity: 0, y: '100%' },
          }}
           initial="hidden"
           animate="show"
				>	

          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>           
			<p>{db.description}</p>					   
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

        <Widget
           as={motion.section}
           transition={{ delay: 0.5, duration: 0.5 }}
           variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
           }}
            initial="hidden"
            animate="show"
        >

        <Widget.Content>
            <h1>Quizes da galera</h1>

            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                      >
                      {`${githubUser} > ${projectName}`}                    
                    </Widget.Topic>
                  </li>
                  );
              })}
            </ul>

          </Widget.Content>
        </Widget>

        <Footer 
           as={motion.section}
           transition={{ delay: 0.85, duration: 0.5 }}
           variants={{
             show: { opacity: 1, y: '0' },
             hidden: { opacity: 0, y: '100%' },
           }}
            initial="hidden"
            animate="show"
        />
		  
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/viniciusgabriels" />
    </QuizBackground>
  ); 
}
