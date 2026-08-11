function MyPet(){

    return(
        <svg width={200} height={200}>
            {/* Coffee Hat*/}
            <rect rx={5} x={24} y={33} width={70} height={24} stroke="black" fill="#2196F3" stroke-width ="0.4"></rect>
            <rect rx={11} x={10} y={50} width={100} height={22} stroke="black" fill="#30AFFF" stroke-width ="0.4"></rect>

            {/* Head*/}
            <rect rx={14} x={15} y={66} width={90} height={70} stroke="black" fill="#E3F2FD" ></rect>
            <rect rx={14} x={25} y={75} width={70} height={50} stroke="#E3F2FD" fill="black" stroke-width ="0.7" ></rect>

            {/* Eye Brows*/}
              <path d="M 80 15 C 70 20, 110 20, 90 15" stroke="black" fill="transparent" stroke-width ="3" />

            {/* Eyes*/}
            <ellipse cx={120} cy={130} rx={6.5} ry={5} transform="rotate(90,100,75)" fill="#5DF8D8"></ellipse>
            <ellipse cx={120} cy={100} rx={6.5} ry={5} transform="rotate(90,100,75)" fill="#5DF8D8"></ellipse>
            
            

            
        </svg>
    )
}
export default MyPet