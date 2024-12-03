import React from 'react'
import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const StartupCard = ({post}: {post: StartupTypeCard}) => {
    const {createdAt, title, description, id, views, author: {id: authorId, name}, img, category} = post;
  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>
            {formatDate(createdAt)}
        </p>
        <div className='flex gap-1.5'>
            <EyeIcon className='size-6 text-primary'/>
            <span className='text-16-medium'>{views}</span>
        </div>

      </div>
      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
            <Link href={`/user/${authorId}`}>
                <p className='text-16-medium line-clamp-1'>{name}</p>
            </Link>
            <Link href={`/startup/${id}`}>
                <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
            </Link>
        </div>
            <Link href={`/user/${authorId}`}>
                <Image src="https://placehold.co/48x48" alt="Profile Pic" width={48} height={48} className='rounded-full'/>
            </Link>
      </div>
        <Link href={`/startup/${id}`}>
            <p className='startup-card_desc'>
                {description}
            </p>
        </Link>
        <img src={img} alt="Startup Image" className='startup-car_img'/>
        <div className='flex-between gap-3 mt-5'>
            <Link href={`/?query=${category.toLowerCase()}`}>
                <p className='text-16-medium'>{category}</p>
            </Link>
            <Button className='startup_card-btn' asChild>
                <Link href={`/startup/${id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default StartupCard
