export default function initialState (){
  return {
    player: "",
    ig: "",
    name: "",
    trouble: "",
    timing: [],
    space: "",
    ballSafety: "",
    accessibility: "",
    region: "Select dropdown",
    errors: {
      name: false,
      trouble: false,
      timing: false,
      space: false,
      ballSafety: false,
      accessibility: false,
      region: false,
    },
    imageUrl: "",
    files: [],
    isUploadingImage: false
  }
}