using api.Model;

namespace api.DTO
{
    public class StreetDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public CityDTO City { get; set; }
    }
}