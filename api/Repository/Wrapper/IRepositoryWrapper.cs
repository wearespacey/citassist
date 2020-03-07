namespace api.Repository
{
    public interface IRepositoryWrapper
    {
        IAccessPointRepository AccessPoint { get; }
        void Save();
    }
}