// import React, { useEffect } from 'react'
// import ReactDom, { createPortal } from 'react-dom'
// import MyDocument from '../pages/_document'

// const MODAL_STYLES = {
//     postition: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#FFF',
//     padding: '50px',
//     zIndex: 1000
// }

// const OVERLAY_STYLES = {
//     postition: 'fixed',
//     top: 0,
//     left: 0,
//     transform: 0,
//     backgroundColor: 'rgba(0,0,0, .7)',
//     zIndex: 1000
// }


// export default function Modal({ open, children, onClose }) {

//     if (!open) return null
    
//     return ReactDom.createPortal(
//         <>
//             <div style={OVERLAY_STYLES}></div>
//             <>Hello</>
//             <div style={MODAL_STYLES}>
//                 <button onClick={onClose}>Close modal</button>
//                 {children}
//             </div>
//         </>,
//         document.getElementById('portal')
//     )
// }
