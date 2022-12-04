import React from 'react';

const MyFeatue = React.lazy(() =>
    Promise.all([
        import('./MyFeature'),
        new Promise((resolve) => {
            setTimeout(() =>{
                resolve();
            }, 3000);
        }),
    ]).then(([m]) => m)
)

function Mypage ()  {
    return (
        <>
            <h1>My pages</h1>
            <MyFeatue />
        </>
    );
}

export default Mypage;
