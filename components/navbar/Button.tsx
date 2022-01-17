import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

export type LinkProps = {
    pathName: string;
    buttonName: string;
}

const NavButton = ({pathName, buttonName, ...props}:LinkProps) => {
    // next router hook for routing obj and methods
    const router = useRouter()
    
    return (
        <Link href={pathName} passHref>
            <Button
                rounded={"sm"}
                aria-label={`Go To ${buttonName} Page`}
                // if page pathname doesn't equal button pathName, set bg to nav color, else default button bg
                bg={router.pathname !== pathName ? "red.900" : undefined}
                // todo: edit outline styling
                _focus={{outline: "hidden"}}
                {...props}
            > 
                {buttonName} 
            </Button>
        </Link>
    );
};

export default NavButton;