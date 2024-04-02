import { useState } from "react"
import styles from './accordian.module.css';
import Layouts from "../../Layouts/Layouts";
import { Link } from 'react-router-dom';
import AccordianItems from "./AccordianItems";

const Accordian = () => {
    type accordianObject = {
        header: string,
        content: string,
        show: boolean,
    }
    const [accordians, setAccordians] = useState<accordianObject[]>([
        {
            header: "Section 1",
            content: "Section 1 contents Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate p",
            show: false,
        },
        {
            header: "Section 2",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
            show: false,
        },
        {
            header: "Section 3",
            content: "Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?",
            show: false,
        },
    ]);

    
    const headerContent = <><Link to="/"><button><h3>Back</h3></button></Link><h1>Accordian</h1></>;

  return (
    <Layouts header={headerContent}>
        <div className={styles.content}>
            <AccordianItems accordians={accordians} setAccordians={setAccordians}/>
        </div>
    </Layouts>
  )
}

export default Accordian