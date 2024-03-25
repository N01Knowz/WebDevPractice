import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent({ display }) {
  //   const display = false;
  //   if (display) {
  //     return (
  //       <>
  //         <div>
  //           <h3>This is a conditional component</h3>
  //         </div>
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       <div>
  //         <h3>Hello from conditioan component!</h3>
  //       </div>
  //     </>
  //   );
  //   if (display) {
  //     return <Code />;
  //   }
  //   return <Welcome />;
  let message;
  const display1 = true;
  //   if (display1) {
  //     message = <h1>This is message 1</h1>;
  //   } else {
  //     message = <h1>This is message 2</h1>;
  //   }
  //   if (display1) {
  //     message = <Code />;
  //   } else {
  //     message = <Welcome />;
  //   }
  //   return message;
  //   message = display ? <Code /> : <Welcome />;
  //   return message;
  return display ? <Code /> : <Welcome />;
}
