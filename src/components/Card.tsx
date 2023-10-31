import * as React from 'react';
import Image from 'next/image';
import { FC } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CardProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
  name: string;
}

const CardComponent: FC<CardProps> = ({ src, alt, title, desc, name }) => (
  <Card className='w-[800px] h-[400px] flex flex-col mb-8'>
    <CardHeader className='w-full'>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className='relative flex-row w-[100%] h-[250px] grid grid-cols-2 gap-5'>
      <div className='relative flex-row w-[100%] h-[250px]'>
        <Image
          src={src}
          alt={alt}
          className='overflow-hidden rounded-lg relative'
          fill
          sizes='(max-width: [5%]) 100vw, 10px'
          layout='contain'
        />
      </div>
      <div>
        <CardTitle className='mb-5'>{name}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </div>
    </CardContent>
    <CardFooter className='flex justify-between mt-5'>
      <Button variant='outline'>Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
);

export default CardComponent;
