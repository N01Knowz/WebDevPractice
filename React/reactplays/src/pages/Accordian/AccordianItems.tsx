import styles from './accordian.module.css';


type AccordianObject = {
    header: string,
    content: string,
    show: boolean,
}

type AccordianItemsProps = {
    accordians: AccordianObject[];
    setAccordians: (value: React.SetStateAction<AccordianObject[]>) => void;
}

const AccordianItems = ({ accordians, setAccordians } : AccordianItemsProps) => {
    const toggleShow = (toggleIndex: number) => {
        setAccordians(prevAccordians => {
            return prevAccordians.map((accordion, index) => ({
              ...accordion,
              show: index === toggleIndex ? !accordion.show : false
            }));
          });
    }
  return (
    <>
    {accordians.map((item, index) => (
        <div className={styles.accordianItem} key={item.header} onClick={() => toggleShow(index)}>
            <div className={styles.accordianHeader}>
                <h2>{item.header}</h2>
                {item.show ? <h2>-</h2> : <h2>+</h2>}
            </div>
            {item.show && <div className={styles.accordianContent}>
                <h3>{item.content}</h3>
            </div>
            }
        </div>
    ))}
    </>
  )
}

// or


// const AccordianItems = (props: AccordianItemsProps) => {
//     const toggleShow = (toggleIndex: number) => {
//         props.setAccordians(prevAccordians => {
//             return prevAccordians.map((accordion, index) => ({
//               ...accordion,
//               show: index === toggleIndex ? !accordion.show : false
//             }));
//           });
//     }
//   return (
//     <>
//     {props.accordians.map((item, index) => (
//         <div className={styles.accordianItem} key={item.header} onClick={() => toggleShow(index)}>
//             <div className={styles.accordianHeader}>
//                 <h2>{item.header}</h2>
//                 {item.show ? <h2>-</h2> : <h2>+</h2>}
//             </div>
//             {item.show && <div className={styles.accordianContent}>
//                 <h3>{item.content}</h3>
//             </div>
//             }
//         </div>
//     ))}
//     </>
//   )
// }

export default AccordianItems