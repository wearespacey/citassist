using System.Collections.Generic;

namespace api.DTO
{
    public class CountryDTO
    {
        public CountryDTO()
        {
            Cities = new HashSet<CityDTO>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual IEnumerable<CityDTO> Cities { get; set; }
    }
}