import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('../components/Test/Test'), { ssr: false })

export const getStaticProps = () => {

  return fetch('https://quizapi.io/api/v1/questions?apiKey=CZUKtuyysltMbckdmRlyry3LED4F5kqR2FSVC7Vz&limit=10&tags=JavaScript')
    .then(res => res.json())
    .then(questions => {
      return {
        props: {
          questions,
        },
      }
    })
};

function Test({ questions }) {
  return <DynamicComponent questions={questions} />
}