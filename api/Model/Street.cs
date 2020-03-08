using System.Collections.Generic;

namespace api.Model
{
    public class Street
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? CityId { get; set; }

        public virtual City City { get; set; }
    }
}