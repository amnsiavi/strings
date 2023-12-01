import React,{FC} from 'react';
import Link from 'next/link';



interface MainLinkProps {

    href : string,
    text:string,
}

const MainLink :FC <MainLinkProps> = ({href, text}:MainLinkProps)=>{
  
    return(
        <div className='w-full text-white text-center'>
        <Link href={href} className='bg-slate-900 rounded-lg p-2 block'>
            {text}
        </Link>

        </div>
    )
}



export default MainLink;
