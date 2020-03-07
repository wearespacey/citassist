namespace api.Model
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CodePostal { get; set; }
        public int? CountryId { get; set; }
    }
}