using System.Collections.Generic;

namespace api.Model
{
    public class Country
    {
        public Country()
        {
            Cities = new HashSet<City>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual IEnumerable<City> Cities { get; set; }
    }
}