using Microsoft.EntityFrameworkCore;

namespace api.Model
{
    public class CitAssistContext : DbContext
    {
        public DbSet<AccessPoint> AccessPoints { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public CitAssistContext(DbContextOptions<CitAssistContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuidler)
        {
            modelBuidler.Entity<AccessPoint>(e =>
            {
                e.HasKey(ap => ap.Id);

                e.Property(ap => ap.Id)
                 .HasColumnName("ID")
                 .ValueGeneratedOnAdd();

                e.Property(ap => ap.Name);
            });

            modelBuidler.Entity<Account>(e =>
            {
                e.HasKey(ap => ap.Id);

                e.Property(ap => ap.Id)
                 .HasColumnName("ID")
                 .ValueGeneratedOnAdd();

                e.Property(ap => ap.Login);

                e.Property(ap => ap.Password);
            });

            modelBuidler.Entity<Country>(e =>
            {
                e.HasKey(c => c.Id);

                e.Property(c => c.Id)
                 .HasColumnName("ID")
                 .ValueGeneratedOnAdd();

                e.Property(c => c.Name);

                e.HasMany(c => c.Cities)
                .WithOne(c => c.Country)
                .HasForeignKey(c => c.CountryId);
            });

            modelBuidler.Entity<City>(e =>
            {
                e.HasKey(c => c.Id);

                e.Property(c => c.Id)
                 .HasColumnName("ID")
                 .ValueGeneratedOnAdd();

                e.Property(c => c.Name);

                e.Property(x => x.CodePostal);

                e.Property(c => c.CountryId);

                e.HasMany(c => c.Streets)
                .WithOne(c => c.City)
                .HasForeignKey(c => c.CityId);
            });

            modelBuidler.Entity<Street>(e =>
            {
                e.HasKey(c => c.Id);

                e.Property(c => c.Id)
                 .HasColumnName("ID")
                 .ValueGeneratedOnAdd();

                e.Property(c => c.Name);

                e.Property(e => e.CityId);
            });
        }
    }
}