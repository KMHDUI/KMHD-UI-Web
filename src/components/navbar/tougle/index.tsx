const Path = (props: any) => (
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      strokeLinecap="round"
      {...props}
    />
  );
  
  import {  motion} from "framer-motion";

  type TougleType = {
    onClick : () => void,
    status: boolean
  }

  export default function MenuToggle(props: TougleType){
    return <button 
        onClick={props.onClick}
        className="
        outline-0	
        border-0
        cursor-pointer
        p-[10px]
        ">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#294390"
                strokeLinecap="round"

                d="M 2 2.5 L 20 2.5"
                initial={ props.status ? "isOpen" : "isClose"}
                animate={ props.status ? "isOpen" : "isClose"}
                variants ={{
                    isClose : { d:"M 2 2.5 L 20 2.5"},
                    isOpen: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <motion.path 
                fill="transparent"
                strokeWidth="3"
                stroke="#294390"
                strokeLinecap="round"

                d="M 2 9.423 L 20 9.423" 

                initial={"middle"}
                animate={props.status ? "isOpen" : "isClose"}
                opacity={props.status ? 0 : 1}

                variants ={{
                    isClose : { opacity: 1},
                    isOpen: { opacity: 0,}
                }}

            />

            <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#294390"
                strokeLinecap="round"

                d="M 2 16.346 L 20 16.346"
                className="bottom"
                // initial={ !props.status ? "isClose" : "isOpen"}
                animate={props.status ? "isOpen" : "isClose"}
                variants={{
                    isClosed: { d: "M 2 16.346 L 20 16.346" },
                    isOpen: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
      </svg>
    </button>
}