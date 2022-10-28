export default function Quote({ children, classname }: { children: React.ReactNode; classname?: string }) {
    return (
        <div className={'flex ' + classname}>
            <div className="bg-secondary p-1 mr-3 rounded-full"></div>
            <p>{children}</p>
        </div>
    );
}
