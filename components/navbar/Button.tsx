import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

export type LinkProps = {
    pathName: string;
    buttonName: string;
}

const NavButton = ({pathName, buttonName, ...props}:LinkProps) => {
    const router = useRouter()

    return (
        <Link href={pathName} passHref>
            <Button
                rounded={'sm'}
                aria-label={`Go To ${buttonName} Page`}
                bg={router.pathname !== pathName ? "red.900" : undefined}
                _focus={{outline: "hidden"}}
                {...props}
            > 
                {buttonName} 
            </Button>
        </Link>
    );
};

export default NavButton;