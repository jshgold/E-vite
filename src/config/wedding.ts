// 웨딩 정보 설정 파일 - 여기만 수정하면 전체 반영됩니다

export const wedding = {
  groom: {
    name: "홍길동",
    familyName: "홍",
    role: "신랑",
    father: "홍아버지",
    mother: "홍어머니",
    account: {
      bank: "신한은행",
      number: "000-000-000000",
      holder: "홍길동",
    },
  },
  bride: {
    name: "김지은",
    familyName: "김",
    role: "신부",
    father: "김아버지",
    mother: "김어머니",
    account: {
      bank: "농협",
      number: "000-0000-0000-00",
      holder: "김지은",
    },
  },
  date: {
    year: 2026,
    month: 12,
    day: 5,
    hour: 14,
    minute: 30,
    dayOfWeek: "토요일",
  },
  venue: {
    name: "웨딩홀이란다",
    hall: "라피네홀",
    address: "서울특별시 강남구 봉은사로 302",
    addressDetail: "알알알",
    tel: "02-000-0000",
    mapEmbedUrl:
      "https://map.kakao.com/?map_type=TYPE_MAP&q=%EC%95%84%EB%A5%B4%EB%B2%A0&hId=191889847&mode=place&urlLevel=3&urlX=508677&urlY=1113665",
    naverMapUrl:
      "https://map.naver.com/p/search/%EC%95%84%EB%A5%B4%EB%B2%A0/place/1681062430?c=15.00,0,0,0,dh&placePath=/home?bk_query=%EC%95%84%EB%A5%B4%EB%B2%A0&entry=bmp&from=map&fromPanelNum=2&timestamp=202605220957&locale=ko&svcName=map_pcv5&searchText=%EC%95%84%EB%A5%B4%EB%B2%A0",
    kakaoMapUrl:
      "https://map.kakao.com/?map_type=TYPE_MAP&q=%EC%95%84%EB%A5%B4%EB%B2%A0&hId=191889847&mode=place&urlLevel=3&urlX=508677&urlY=1113665",
  },
  invitation: {
    message: `서로가 마주보며 다져온 사랑을
이제 함께 한 곳을 바라보며
걸어가고자 합니다.

저희 두 사람이 사랑으로 만나
인생의 반려자가 되려 합니다.

오셔서 축복해 주시면
더없는 기쁨으로 간직하겠습니다.`,
  },
  // 갤러리 이미지 (public/gallery/ 폴더에 이미지 넣고 파일명 입력)
  gallery: [
    "/gallery/photo1.jpg",
    "/gallery/photo2.jpg",
    "/gallery/photo3.jpg",
  ],
  // OG 이미지 (카카오톡 공유 시 노출)
  ogImage: "/og-image.jpg",
};

export type Wedding = typeof wedding;
