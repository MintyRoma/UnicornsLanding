'use client'
import {cn} from "@/lib/utils";

const AuraBackground = ({ className, delay='1s'}:{className:string, delay:string}) => {

    return (
        <div
            className={cn("absolute animate-resize", className)}
            style={{
                background: `radial-gradient(circle, rgba(53, 20, 245) 0%, transparent 45%)`,
                zIndex: '-1',
                animationDelay: delay,
            }}
        ></div>
    );
};

export default AuraBackground;