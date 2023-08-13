import React from 'react'
import Layout from '../../pages/Layout'
import styled from 'styled-components'
import CaseIcon from '/Dashboard/Frame.svg'
import PageIcon from '/Dashboard/Brief.svg'
import DollarIcon from '/Dashboard/Dollar.svg'
import DollarGreenIcon from '/Dashboard/Dollargreen.svg'
const Wrap = styled.div`
  padding: 2rem 4rem;
`

const PageHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100px;
  padding: 1rem;
`
const HeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const HeadButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 214px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #5bbb7b;
  box-shadow: 0px 5px 20px 0px rgba(91, 187, 123, 0.15);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`
const Title = styled.p`
  color: #222;
  font-size: 32px;
  font-weight: 700;
`

const Desc = styled.p`
  color: #222;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`
const BodyWrap = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 1rem;
  padding-bottom: 5rem;
`
const BodyHead = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`
const StepsWrap = styled.div`
  display: flex;
  margin-right: 5rem;
`
const StepImg = styled.img`
  width: 80px;
  background-color: ${(props) => props.bg};
  padding: 1rem;
  border-radius: 6px;
`
const StepInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`
const StepName = styled.p`
  color: #222;
  font-size: 17px;
  font-weight: 500;
  line-height: 28px;
`
const StepDesc = styled.p`
  color: #a7a7a7;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`
const BudgetDetails = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-left: 30px;
  margin-bottom: 2rem;
`
const BarName = styled.p`
  color: #222;
  font-size: 15px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 5px;
`
const AmountBar = styled.div`
  width: 100%;
  display: flex;
`
const InputImage = styled.img`
  width: 42px;
  background-color: #eaf6ee;
  padding: 12px 14px;
`
const InputAmount = styled.input`
  width: 90%;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  background-color: rgba(255, 255, 255, 0);
  padding-left: 15px;
  outline: none;
`
const TextBox = styled.textarea`
  width: 93%;
  font-size: 1rem;
  height: 300px;
  outline: none;
  padding: 1rem;
  resize: none;
  border: 1px solid #eaeaea;
`
const ButtonSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Butn = styled.button`
  display: flex;
  width: 222.337px;
  height: 52.795px;
  padding: 11.387px 73.766px 12.422px 73.766px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: 14px;
  border-radius: 4px;
  background-color: ${(props) => props.bg};
  border: none;
  color: ${(props) => props.dg};
  box-shadow: 0px 5px 20px 0px rgba(91, 187, 123, 0.15);
  margin-right: 10px;
`
const PostProject = () => {
  return (
    <Layout>
      <Wrap>
        <PageHead>
          <HeadWrap>
            <Title>Post a New Project</Title>
            <Desc>Post a project for freelancers to apply to help with.</Desc>
          </HeadWrap>
          <HeadButton>Post a New Project</HeadButton>
        </PageHead>
        <BodyWrap>
          <BodyHead>
            <StepsWrap>
              <StepImg src={CaseIcon} bg='#5BBB7B' />
              <StepInfo>
                <StepName>Project Type</StepName>
                <StepDesc>Add Details here</StepDesc>
              </StepInfo>
            </StepsWrap>
            <StepsWrap>
              <StepImg src={DollarIcon} bg='#222222' />
              <StepInfo>
                <StepName>Project Type</StepName>
                <StepDesc>Add Details here</StepDesc>
              </StepInfo>
            </StepsWrap>
            <StepsWrap>
              <StepImg src={PageIcon} bg='#EAF6EE' />
              <StepInfo>
                <StepName>Project Type</StepName>
                <StepDesc>Add Details here</StepDesc>
              </StepInfo>
            </StepsWrap>
          </BodyHead>
          <BudgetDetails>
            <BarName>Project Budget</BarName>
            <AmountBar>
              <InputImage src={DollarGreenIcon} />
              <InputAmount placeholder='Type here' />
            </AmountBar>
          </BudgetDetails>
          <BudgetDetails>
            <BarName>Expected Deliverables</BarName>
            <AmountBar>
              <TextBox placeholder='Description' />
            </AmountBar>
          </BudgetDetails>
          <ButtonSet>
            <Butn bg='#EAF6EE' dg='#2DC66A'>
              Previous
            </Butn>
            <Butn bg='#2DC66A' dg='#EAF6EE'>
              Next Step
            </Butn>
          </ButtonSet>
        </BodyWrap>
      </Wrap>
    </Layout>
  )
}

export default PostProject
