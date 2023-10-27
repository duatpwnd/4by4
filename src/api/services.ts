const services = {
  container: "/api/container", // 정보,삭제,업데이트
  containerList: "/api/container/list", // 배포 리스트
  serverToggle: "/api/server",
  server: "/api/server/list", // 배포등록가능한 서버 리스트
  serverList: "/api/server/all/list", // 서버 리스트
  modelList: "/api/model/list", // 모델 리스트
  modelNameList: "/api/model/name/list", // 배포등록가능한 모델 리스트
  modelTagList: "/api/model/tag/list", // 배포등록가능한 태그 리스트
  modelInfo: "/api/model", // 단일 모델 정보
  gpuList: "/api/gpu/list", // 배포등록가능한 gpu 리스트
  upload: "/api/file/upload", // 모델 업로드
  videoUpload: "/api/video/file/upload",
  videoInference: "/api/video/inference", // 비디오 추론
  videoDownload: "/api/video/download", // 비디오 다운로드
  videoFileUpload: "/api/video/file/upload", // 비디오 업로드
  inferenceModelList: "/api/model/inference/list", // 추론 모델리스트
  videoList: "/api/video/list", // 비디오 리스트
  changePassword: "/api/user/password-mail", // 비밀번호 변경
  connectSSE: "/api/sse/connect",
};
export default services;
