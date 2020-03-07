using System.Collections.Generic;

namespace api.Model
{
    public class City
    {
        public City()
        {
            Streets = new HashSet<Street>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string CodePostal { get; set; }
        public int? CountryId { get; set; }

        public virtual Country Country { get; set; }
        public virtual IEnumerable<Street> Streets { get; set; }
    }
}