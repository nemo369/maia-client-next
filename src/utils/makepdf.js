// // import jsPDF from 'jspdf';
// // import directionsp from '../../src/images/directionsp.png'
// import pdfMake, { createPdf } from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// export const makepdf = async (compareData) => {
//   const dd = {
//     pageSize: {
//       width: 450,
//       height: 'auto',
//     },
//     pageMargins: [50, 50, 50, 50],
//     content: [
//       {
//         alignment: 'justify',
//         columns: [
//           compareData.map(
//             // eslint-disable-next-line no-sequences
//             ({ full_data: data }) => ({ text: data.drishot }, { text: data.teudA_TEUR })
//           ),
//         ],
//       },
//     ],
//   };

//   const pdf = createPdf(dd);
//   pdf.download('PPRA.pdf');
// };
