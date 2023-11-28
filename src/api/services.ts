const services = {
  container: "/container", // 정보,삭제,업데이트
  containerList: "/container/list", // 배포 리스트
  serverToggle: "/server",
  server: "/server/list", // 배포등록가능한 서버 리스트
  serverList: "/server/all/list", // 서버 리스트
  modelList: "/model/list", // 모델 리스트
  modelNameList: "/model/name/list", // 배포등록가능한 모델 리스트
  modelTagList: "/model/tag/list", // 배포등록가능한 태그 리스트
  modelInfo: "/model", // 단일 모델 정보
  gpuList: "/gpu/list", // 배포등록가능한 gpu 리스트
  upload: "/file/upload", // 모델 업로드
  video: "/video",
  videoInference: "/video/inference", // 비디오 추론
  videoFileUpload: "/video/file/upload", // 비디오 업로드
  inferenceModelList: "/model/inference/list", // 추론 모델리스트
  videoList: "/video/list", // 비디오 리스트
  sendEmailPassword: "/user/password-mail", // 비밀번호 이메일 발송
  requestPasswordChange: "/user/password", // 비밀번호 변경
  connectSSE: "/sse/connect", // sse 연결
  connectServerSSE: "/sse/server", // server sse 연동
  userJoin: "/user/join", // 회원가입후 이메일 인증
  videoAlready: "/video/already",
};
export default services;
