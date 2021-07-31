import {queryMainTodayFlow, queryNSBound, queryGemFlowData} from './flow.js';

queryMainTodayFlow()
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });

// queryNSBound()
//     .then((data) => {
//       console.log(data);
//     });

// queryGemFlowData()
//     .then((data) => {
//       console.log(data);
//     });

