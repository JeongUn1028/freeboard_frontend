import styled from "@emotion/styled"
import image from "../../../public/image3.png"
const Wrapper = styled.div`
    width: 1200px;
    height: 1847px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding:60px 101px;
    box-sizing: border-box;
`

const Title = styled.div`
    font-size: 36px;
    font-weight: 700;
`

const Auth = styled.div`
width: 100%;
height: 92px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const AuthWriter = styled.div`
    width: 486px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const AuthPassword = styled.div`
    width: 486px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const PostTitle = styled.div`
width: 100%;
height: 92px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const PostContents = styled.div`
width: 100%;
height: 520px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const StyledInput = styled.input`
    width: 100%;
    height: 52px;
`
const ContentsInput = styled.input`
    width: 100%;
    height: 480px;
`

const Address = styled.div`
    width: 100%;
    height: 242px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const AddressInput = styled.input`
    width: 77px;
    height: 52px;
    margin-right: 16px;
`
const AddressBtn = styled.button`
    background-color: black;
    color: white;
    width:124px;
    height: 52px;
`

const YouTube = styled.div`
    width:100%;
    height: 81px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const AttachImage = styled.div`
    width: 100%;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Images = styled.div`
    width: 282px;
    display: flex;
    justify-content: space-between;
`
const Main = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const PostBtn =styled.button`
    width: 179px;
    height: 52px;
    background-color: #ffd600;
`
export default function () {
    return (
        <Wrapper>
            <div>
                <Title>게시물 등록</Title>
            </div>
            <Auth>
                <AuthWriter>
                    <div>작성자</div>
                    <StyledInput placeholder="이름을 지어주세요."/>
                </AuthWriter>
                <AuthPassword>
                    <div>비밀번호</div>
                    <StyledInput placeholder="비밀번호를 입력해주세요."/>
                </AuthPassword>
            </Auth>
            <PostTitle>
                <div>제목</div>
                <StyledInput placeholder="제목을 작성해 주세요." />
            </PostTitle>
            <PostContents>
                <div>내용</div>
                <div><ContentsInput /></div>
            </PostContents>
            <Address>
                <div>주소</div>
                <div>
                    <AddressInput placeholder="07250"/>
                    <AddressBtn>우편번호 검색</AddressBtn>
                </div>
                    <StyledInput />
                    <StyledInput />
            </Address>
            <YouTube>
                <div>유튜브</div>
                <StyledInput placeholder="링크를 복사해 주세요" />
            </YouTube>
            <AttachImage>
                <div>사진첨부</div>
                <Images>
                <img src="../../../image3.png"/>
                <img src="../../../image3.png" />
                <img src="../../../image3.png" />
                </Images>
            </AttachImage>
            <Main>
                <div>메인 설정</div>
                <div>
                    <label>
                    <input type="radio" value="YouTube"/>유튜브</label>
                   <label> <input type="radio" value="Pic"/>사진</label>
                </div>
            </Main>
            <PostBtn>등록하기</PostBtn>
        </Wrapper>
    )
}