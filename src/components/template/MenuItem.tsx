import Link from 'next/Link'

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps){
    function renderizarLink(){
        return(
            <a className={`
                    flex flex-col justify-center items-center
                    h-20 w-20 
                    dark:text-gray-600 
                    
                    ${props.className}
                `}>
                    {props.icone}
                
                    <span className={` text-xs font-light`}>
                        {props.texto}
                    </span>
                </a>
        )
    }

    return(
        <li onClick={props.onClick} className={`
            cursor-pointer
            hover:bg-gray-100 dark:hover:bg-gray-800`}>
            {props.url ? (
              <Link href={props.url}>
                  {renderizarLink()}
              </Link>
            ) : (
                renderizarLink()
            )}
          
            
        </li>
    )
}