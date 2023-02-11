import Test from "@/components/Test/Test"

export const getStaticProps = async () => {

  const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=CZUKtuyysltMbckdmRlyry3LED4F5kqR2FSVC7Vz&limit=10&tags=JavaScript');
  const questions = await response.json()
  return {
      props: {
          questions,
      },

  }
}

export default Test