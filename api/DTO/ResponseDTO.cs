namespace api.DTO
{
    public class ResponseDTO
    {
        public bool Success { get; set; }
        public object Data { get; set; }
        public string Message { get; set; }
    }
}