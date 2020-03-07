using System.Collections.Generic;

namespace api.DTO
{
    public class CityDTO
    {
        public CityDTO()
        {
            Streets = new HashSet<StreetDTO>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string CodePostal { get; set; }

        public CountryDTO Country { get; set; }
        public virtual IEnumerable<StreetDTO> Streets { get; set; }        
    }
}